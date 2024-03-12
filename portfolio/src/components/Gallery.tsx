"use client";
import Link from "next/link";
import { allDocs, Doc } from "contentlayer/generated";
import { useState } from "react";

import { FaPlay, FaGithub, FaClipboard, FaPython } from "react-icons/fa";

function GalleryElement(post: Doc) {
  const path: string = "blog/" + post.slugParams;
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      style={{
        width: "49%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Link href={path}>
        <div
          className="gallery-image-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/*TODO: Hier müssen andere Images rein.*/}
          <img className="gallery-image" src={post.img} alt="Post Image" />
          {hovered && (
            <div className="overlay-container">
              <div className="overlay-content flex flex-a-center-j-around">
                <div>
                  <div className="flex flex-a-center-j-start">
                    <img
                      className="overlay-content-icon"
                      src={post.icon}
                      alt="Icon"
                    />
                    <h2 className="overlay-content-heading">{post.title}</h2>
                  </div>
                  <p className="overlay-content-des">{post.des}</p>
                </div>
                <div className="flex flex-center">
                  <a href={path}>
                    <button className="flex flex-center overlay-content-button">
                      <FaClipboard />
                    </button>
                  </a>
                  {/*TODO: Hier fehlt die GitHub URL*/}
                  <a href="#">
                    <button className="flex flex-center overlay-content-button">
                      <FaGithub />
                    </button>
                  </a>
                  {/*TODO: Hier fehlt die Page URL*/}
                  <a href="#">
                    <button className="flex flex-center overlay-content-button">
                      <FaPlay />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}

export default function Gallery() {
  const posts = allDocs;

  return (
    <div className="dynamic-section bg-dark flex flex-center padding-50">
      <div className="dynamic-container flex flex-center gap flex-wrap mobile-margin-20">
        {posts.map((post, idx) => (
          <GalleryElement key={idx} {...post} />
        ))}
      </div>
    </div>
  );
}
