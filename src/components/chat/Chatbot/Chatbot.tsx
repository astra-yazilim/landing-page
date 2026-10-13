"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { useContent, useLocale } from "@/components/i18n/LocaleProvider/LocaleProvider";
import { Icon } from "@/components/ui/Icon/Icon";
import { getPath, getServicePath } from "@/config/routes";
import type { ChatLink } from "@/content/types";
import { findChatIntent } from "@/lib/chatbot";
import { cx } from "@/lib/text";
import styles from "./Chatbot.module.css";

type ChatMessage = {
  id: number;
  author: "bot" | "user";
  text: string;
  link?: ChatLink;
};

const replyDelay = 500;
const maxInputLength = 240;

export function Chatbot() {
  const locale = useLocale();
  const content = useContent();
  const chatbotContent = content.chatbot;
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 0, author: "bot", text: chatbotContent.greeting },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const nextId = useRef(1);
  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const replyTimer = useRef<number | null>(null);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    inputRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(
    () => () => {
      if (replyTimer.current) window.clearTimeout(replyTimer.current);
    },
    [],
  );

  const getLinkHref = (link: ChatLink) =>
    link.service ? getServicePath(locale, content.services[link.service].slug) : getPath(locale, link.route);

  const ask = (question: string) => {
    const text = question.trim().slice(0, maxInputLength);
    if (!text || isTyping) return;

    const intent = findChatIntent(text, chatbotContent.intents);
    const reply: Omit<ChatMessage, "id"> = intent
      ? { author: "bot", text: intent.answer, link: intent.link }
      : { author: "bot", text: chatbotContent.fallback, link: chatbotContent.fallbackLink };

    setMessages((current) => [...current, { id: nextId.current++, author: "user", text }]);
    setInputValue("");
    setIsTyping(true);
    replyTimer.current = window.setTimeout(() => {
      setMessages((current) => [...current, { id: nextId.current++, ...reply }]);
      setIsTyping(false);
    }, replyDelay);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    ask(inputValue);
  };

  return (
    <div className={styles.root}>
      <AnimatePresence>
        {isOpen ? (
          <motion.section
            id="chatbot-panel"
            className={styles.panel}
            aria-label={chatbotContent.title}
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <header className={styles.header}>
              <span className={styles.avatar}>
                <Icon name="sparkles" size={18} />
              </span>
              <div className={styles.headerText}>
                <p className={styles.title}>{chatbotContent.title}</p>
                <p className={styles.subtitle}>{chatbotContent.subtitle}</p>
              </div>
              <button
                type="button"
                className={styles.close}
                onClick={() => setIsOpen(false)}
                aria-label={chatbotContent.closeLabel}
              >
                <Icon name="close" size={18} />
              </button>
            </header>

            <div ref={logRef} className={styles.log} role="log" aria-live="polite">
              {messages.map((message) => (
                <div key={message.id} className={cx(styles.message, styles[message.author])}>
                  <p>{message.text}</p>
                  {message.link ? (
                    <Link href={getLinkHref(message.link)} className={styles.messageLink} onClick={() => setIsOpen(false)}>
                      {message.link.label}
                      <Icon name="arrowRight" size={14} />
                    </Link>
                  ) : null}
                </div>
              ))}
              {isTyping ? (
                <div className={cx(styles.message, styles.bot, styles.typing)} aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
              ) : null}
            </div>

            <ul className={styles.suggestions}>
              {chatbotContent.suggestions.map((suggestion) => (
                <li key={suggestion}>
                  <button type="button" onClick={() => ask(suggestion)} disabled={isTyping}>
                    {suggestion}
                  </button>
                </li>
              ))}
            </ul>

            <form className={styles.form} onSubmit={handleSubmit}>
              <label htmlFor="chatbot-input" className="visually-hidden">
                {chatbotContent.inputPlaceholder}
              </label>
              <input
                ref={inputRef}
                id="chatbot-input"
                className={styles.input}
                type="text"
                autoComplete="off"
                maxLength={maxInputLength}
                placeholder={chatbotContent.inputPlaceholder}
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
              />
              <button
                type="submit"
                className={styles.send}
                aria-label={chatbotContent.sendLabel}
                disabled={!inputValue.trim() || isTyping}
              >
                <Icon name="send" size={18} />
              </button>
            </form>
            <p className={styles.disclaimer}>{chatbotContent.disclaimer}</p>
          </motion.section>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        className={cx(styles.launcher, isOpen && styles.launcherOpen)}
        onClick={() => setIsOpen((current) => !current)}
        aria-label={isOpen ? chatbotContent.closeLabel : chatbotContent.launcherLabel}
        aria-expanded={isOpen}
        aria-controls="chatbot-panel"
      >
        <Icon name={isOpen ? "close" : "message"} size={24} />
      </button>
    </div>
  );
}
