import React from "react";
import "./AnimatedModal.css";

import { motion, AnimatePresence } from "framer-motion";

const listItems = [
  {
    id: "1",
    title: "MacBook Air M1",
    caption: "The world's best laptop",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, deserunt. Odit officiis aperiam fuga modi dignissimos, cupiditate magni suscipit enim. Distinctio totam est rem reiciendis quibusdam, error adipisci minima doloribus?",
  },
  {
    id: "2",
    title: "MacBook Air M1",
    caption: "The world's best laptop",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, deserunt. Odit officiis aperiam ",
  },
  {
    id: "3",
    title: "MacBook Air M1",
    caption: "The world's best laptop",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, deserunt. Odit officiis aperiam fuga modi dignissimos, cupiditate magni suscipit enim. Distinctio totam est rem reiciendis quibusdam, error adipisci minima doloribus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, deserunt. Odit officiis aperiam fuga modi dignissimos, cupiditate magni suscipit enim. Distinctio totam est rem reiciendis quibusdam, error adipisci minima doloribus?",
  },
  {
    id: "4",
    title: "MacBook Air M1",
    caption: "The world's best laptop",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, deserunt. Odit officiis aperiam fuga modi dignissimos, cupiditate magni suscipit enim. Distinctio totam est rem reiciendis quibusdam, error adipisci minima doloribus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, deserunt.",
  },
  {
    id: "5",
    title: "MacBook Air M1",
    caption: "The world's best laptop",
    content:
      "TLorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, deserunt. Odit officiis aperiam fuga modi dignissimos, cupiditate magni suscipit enim. Distinctio totam est rem reiciendis quibusdam, error adipisci minima doloribus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, deserunt. Odit officiis aperiam fuga modi dignissimos, cupiditate magni suscipit enim. Distinctio totam est rem reiciendis quibusdam, error adipisci minima doloribus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, deserunt. Odit officiis aperiam fuga modi dignissimos, cupiditate magni suscipit enim. Distinctio totam est rem reiciendis quibusdam, error adipisci minima doloribus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, deserunt. Odit officiis aperiam fuga modi dignissimos, cupiditate magni suscipit enim. Distinctio totam est rem reiciendis quibusdam, error adipisci minima doloribus?",
  },

  //   {
  //     id: "6",
  //     title: "MacBook Air M1",
  //     caption: "The world's best laptop",
  //     content: "The world's best laptop",
  //   },
  //   {
  //     id: "7",
  //     title: "MacBook Air M1",
  //     caption: "The world's best laptop",
  //     content: "The world's best laptop",
  //   },
  //   {
  //     id: "8",
  //     title: "MacBook Air M1",
  //     caption: "The world's best laptop",
  //     content: "The world's best laptop",
  //   },
  //   {
  //     id: "9",
  //     title: "MacBook Air M1",
  //     caption: "The world's best laptop",
  //     content: "The world's best laptop",
  //   },
];

const AnimatedModal = () => {
  const [selected, setSelected] = React.useState(null);
  return (
    <div className="am-wrap">
      {listItems &&
        listItems.map((li) => {
          return (
            <motion.li
              onClick={() => setSelected(li.id)}
              layoutId={li.id}
              key={li.id}
              className="item"
            >
              <motion.div className="am-logo-wrap"></motion.div>
              <motion.div className="am-content">
                <motion.h3 className="am-title">{li.title}</motion.h3>
                <motion.p className="am-caption basic-text-muted">
                  {li.caption}
                </motion.p>
              </motion.div>
              <motion.button className="am-btn">Get</motion.button>
            </motion.li>
          );
        })}

      <AnimatePresence>
        {selected && (
          <motion.div
            onClick={() => setSelected(null)}
            layoutId={selected}
            className="am-item-open"
          >
            <motion.div className="item-open">
              <motion.div className="am-logo-wrap"></motion.div>
              <motion.div className="am-content">
                <motion.h3 className="am-title">
                  {listItems[selected - 1].title}
                </motion.h3>
                <motion.p className="am-caption basic-text-muted">
                  {listItems[selected - 1].caption}
                </motion.p>
              </motion.div>
              <motion.button className="am-btn">Get</motion.button>
            </motion.div>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              transition={{ duration: 0.2 }}
              className="am-text-span"
            >
              <motion.p
                // initial={{
                //   opacity: 0,
                //   height: 0,
                // }}
                // animate={{ opacity: 1, height: "auto" }}
                //   transition={{ duration: 2 }}
                // exit={{ opacity: 0, height: 0 }}
                className="basic-text "
              >
                {listItems[selected - 1].content}
              </motion.p>
            </motion.div>

            <motion.div
              onClick={() => setSelected(null)}
              className="am-overlay"
            ></motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedModal;
