"use client";
import { Typewriter } from "react-simple-typewriter";

const TypingText = ({
  text,
  cur,
  curstyle,
}: {
  text: Array<string>;
  cur?: boolean;
  curstyle?: string;
}) => {
  let csrs = "|";
  curstyle && (csrs = curstyle);
  return <Typewriter loop cursor={cur} cursorStyle={csrs} words={text} />;
};
export default TypingText;
