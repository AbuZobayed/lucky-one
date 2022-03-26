import React from 'react';
import { Accordion } from 'react-bootstrap';

const Question = () => {
    return (
        <div>
            <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>ReactJs কিভাবে কাজ করে?</Accordion.Header>
    <Accordion.Body>
    A javascript Library for building user interface. 
library সুবিধা হলো তুমি তোমার ইচ্ছা মতো যে কোনো কিছু add করতে পারবে...
*React টা হলো Declarative.
React খুব ইফ্রসেনছি update করে.কোড খুব সহজে বোঝা
 যায়* React Component Based. Website বিভিন্ন বিভিন্ন ভাগে ভাগে রাখে
.এইগুলো মেনেজ করা update করা সহজ. re-use করতে চাইলে অনেক সহজে করা যায়।
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>UseState কি ভাবে কাজ করে?</Accordion.Header>
    <Accordion.Body>
    return এর বাহিরে একটা State ডিক্লার করি. সেটার জন্য আমরা useState নামে একটা স্পেশাল Function. একটা বলে hook. 
UseState কে আবার Dispatcher বলে।
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </div>
    );
};

export default Question;