import React from "react";

function InstagramLink({ username }) {
  const handleLinkClick = (event) => {
    event.preventDefault(); // Prevent default browser behavior

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // Open Instagram app if installed
      window.location.href = `instagram://user?username=${username}`;

      // Fallback to browser if app is not installed (after a short delay)
      setTimeout(() => {
        window.location.href = `https://www.instagram.com/${username}`;
      }, 250);
    } else {
      // Open in a new tab on desktop
      window.open(`https://www.instagram.com/${username}`, "_blank");
    }
  };

  return (
    <a
      href={`https://www.instagram.com/${username}`}
      onClick={handleLinkClick}
      className="text-wit-blue font-bold"
    >
      @{username}
    </a>
  );
}

export default InstagramLink;
