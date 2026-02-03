import { useEffect } from "react";

const SeoHeadContent = ({ headContent }) => {
  useEffect(() => {
    if (!headContent) return;
    // console.log("Injecting head content:", headContent);
    // Create a temporary container
    const container = document.createElement("div");
    container.innerHTML = headContent;

    // Append each child to <head>
    const head = document.head;
    const addedNodes = [];

    Array.from(container.children).forEach((node) => {
      head.appendChild(node);
      addedNodes.push(node);
    });

    // Cleanup on unmount
    return () => {
      addedNodes.forEach((node) => head.removeChild(node));
    };
  }, [headContent]);

  return null; // no UI
};

export default SeoHeadContent;
