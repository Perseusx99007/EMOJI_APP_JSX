import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "๐": "Happy",
  "๐": "Laugh",
  "๐": "Wink",
  "๐": "Innocent",
  "๐": "Smile",
  "๐ฅฐ": "Love",
  "๐": "Heart Eyes",
  "๐คฉ": "Starry Eyed",
  "๐": "Kiss",
  "๐ค": "Rich",
  "๐ค": "Hug",
  "๐คญ": "Secret",
  "๐คซ": "Quiet",
  "๐ค": "Thinking",
  "๐": "Expressionless",
  "๐": "Neutral Face",
  "๐ถ": "Speechless",
  "๐ค": "Sealed Lips",
  "๐คจ": "Suspicion",
  "๐": "Smirking",
  "๐": "Unamused",
  "๐": "Eye Roll",
  "๐ฌ": "Grimacing",
  "๐": "Sad",
  "๐คค": "Drooling",
  "๐ด": "Sleeping",
  "๐ท": "Sick",
  "๐ค": "Injured",
  "๐คข": "Disgusting",
  "๐คฎ": "Throwing Up",
  "๐": "Smug",
  "๐ฅต": "Hot",
  "๐ฅถ": "Cold",
  "๐ค": "Nerd",
  "๐": "Confused",
  "๐": "Worried",
  "๐ฎ": "Surprised",
  "๐ฐ": "Anxious",
  "๐ญ": "Crying",
  "๐ฑ": "Terrefied",
  "๐ฉ": "Tired",
  "๐ฅฑ": "Yawn",
  "๐ก": "Angry",
  "โ๏ธ": "Snowflake",
  "๐ฅ": "Fire",
  "๐ช": "Diya",
  "โค๏ธ": "Heart",
  "โ๏ธ": "Sun",
  "๐": "Moon",
  "โญ": "Star"
};

// let userName = "Perseus";
let userName = prompt("Enter Your Name");
let colour1 = "Red";
let colour2 = "Black";
let colour3 = "White";

var emojiDatabase = Object.keys(emojiDictionary);

export default function App() {
  let [like, setLike] = useState(0);
  let [meaning, setMeaning] = useState("");
  let [userInput, setUserInput] = useState("");
  let [equals, setEquals] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    var equals;

    if (meaning === undefined) {
      userInput = "";
      meaning = "Sorry we don't have this emoji in our Database.";
      equals = "";
    } else {
      equals = ":-";
    }
    console.log(userInput + equals + meaning);
    setUserInput(userInput);
    setMeaning(meaning);
    setEquals(equals);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
    setUserInput(emoji);
    setEquals(":-");
    console.log(emoji + ":-" + meaning);
  }

  function likeCounter() {
    like++;
    setLike(like);
    console.log("Clicked!!! ", like);
  }

  return (
    <div className="App">
      <h1
        style={{
          color: colour3,
          backgroundColor: colour2,
          padding: "5rem",
          margin: "0px"
        }}
      >
        Welcome <span style={{ color: colour1 }}>{userName}</span>
      </h1>
      <br />
      <br />
      <br />
      <br />
      <input onChange={emojiInputHandler} />
      <br />
      <br />
      <br />
      <div className="font">
        {userInput} {equals} {meaning}
      </div>
      <br />
      <br />
      <h3>EMOJI DATABASE</h3>
      <br />
      <br />
      {emojiDatabase.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ fontSize: "2rem", padding: "1.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <button onClick={likeCounter}>Like Me!!!</button> {like}
    </div>
  );
}
