"use client";
import React from "react";
import { useState, useEffect } from "react";

const Typewriter = () => {
  const words = ["Web Developer", "Front-end Developer", "React Developer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  const typeSpeed = 150;
  const deleteSpeed = 75;
  const pauseDuration = 1000;

  useEffect(() => {
    const currentWord = words[index % words.length];

    if (pause) return;

    const speed = isDeleting ? deleteSpeed : typeSpeed;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentWord) {
        setPause(true);
        setTimeout(() => setIsDeleting(true), pauseDuration);
        setTimeout(() => setPause(false), pauseDuration);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, pause, index]);
  return (
    <span className="text-xl md:text-3xl">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default Typewriter;
