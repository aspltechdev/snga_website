import { useEffect, useMemo, useRef, useState } from "react";

const getYoutubeEmbedUrl = (url) => {
  if (!url) return "";

  try {
    const parsed = new URL(url);

    const hostname = parsed.hostname
      .toLowerCase()
      .replace("www.", "");

    if (hostname === "youtu.be") {
      const id = parsed.pathname
        .replace(/^\/+/, "")
        .split("/")[0];

      return id
        ? `https://www.youtube.com/embed/${id}`
        : "";
    }

    if (
      hostname === "youtube.com" ||
      hostname === "m.youtube.com"
    ) {
      const videoId = parsed.searchParams.get("v");

      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }

      if (parsed.pathname.startsWith("/shorts/")) {
        const id = parsed.pathname
          .split("/")
          .filter(Boolean)[1];

        return id
          ? `https://www.youtube.com/embed/${id}`
          : "";
      }

      if (parsed.pathname.startsWith("/embed/")) {
        return url;
      }
    }

    return "";
  } catch {
    return "";
  }
};

const getInstagramUrl = (url) => {
  if (!url) return "";

  try {
    const parsed = new URL(url);

    const hostname = parsed.hostname
      .toLowerCase()
      .replace("www.", "");

    if (
      hostname === "instagram.com" ||
      hostname === "instagr.am"
    ) {
      return `https://www.instagram.com${parsed.pathname}`;
    }

    return url;
  } catch {
    return url;
  }
};

const getFacebookUrl = (url) => {
  if (!url) return "";

  return url;
};

const getPlatformName = (platform) => {
  switch (platform) {
    case "INSTAGRAM":
      return "Instagram";

    case "YOUTUBE":
      return "YouTube";

    case "FACEBOOK":
      return "Facebook";

    default:
      return "Social Media";
  }
};

const SocialEmbed = ({
  post,
  featured = false,
}) => {
  const instagramRef = useRef(null);

  const [embedError, setEmbedError] =
    useState(false);

  const platform = post?.platform;
  const url = post?.url;

  const youtubeUrl = useMemo(
    () => getYoutubeEmbedUrl(url),
    [url]
  );

  const instagramUrl = useMemo(
    () => getInstagramUrl(url),
    [url]
  );

  const facebookUrl = useMemo(
    () => getFacebookUrl(url),
    [url]
  );

  /*
   * ---------------------------------------------------------
   * INSTAGRAM
   * ---------------------------------------------------------
   *
   * Instagram provides the embed script.
   *
   * The URL still comes directly from admin.
   */

  useEffect(() => {
    if (
      platform !== "INSTAGRAM" ||
      !instagramRef.current ||
      !instagramUrl
    ) {
      return;
    }

    setEmbedError(false);

    const renderInstagram = () => {
      if (
        window.instgrm &&
        window.instgrm.Embeds
      ) {
        try {
          window.instgrm.Embeds.process();
        } catch (error) {
          console.error(
            "Instagram embed error:",
            error
          );
        }
      }
    };

    const existingScript =
      document.querySelector(
        'script[src="https://www.instagram.com/embed.js"]'
      );

    if (existingScript) {
      renderInstagram();
      return;
    }

    const script =
      document.createElement("script");

    script.src =
      "https://www.instagram.com/embed.js";

    script.async = true;

    script.onload = renderInstagram;

    script.onerror = () => {
      setEmbedError(true);
    };

    document.body.appendChild(script);

    return () => {
      script.onload = null;
      script.onerror = null;
    };
  }, [platform, instagramUrl]);

  /*
   * ---------------------------------------------------------
   * INVALID POST
   * ---------------------------------------------------------
   */

  if (!post || !url) {
    return (
      <div className="social-embed social-embed-empty">
        <span>
          Social post unavailable
        </span>
      </div>
    );
  }

  /*
   * ---------------------------------------------------------
   * YOUTUBE
   * ---------------------------------------------------------
   */

  if (
    platform === "YOUTUBE" &&
    youtubeUrl
  ) {
    return (
      <div
        className={`social-embed social-embed-youtube ${
          featured
            ? "social-embed-featured"
            : "social-embed-card"
        }`}
      >
        <iframe
          src={youtubeUrl}
          title="SNGA YouTube video"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  /*
   * ---------------------------------------------------------
   * INSTAGRAM
   * ---------------------------------------------------------
   */

  if (
    platform === "INSTAGRAM" &&
    !embedError
  ) {
    return (
      <div
        className={`social-embed social-embed-instagram ${
          featured
            ? "social-embed-featured"
            : "social-embed-card"
        }`}
        ref={instagramRef}
      >
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={instagramUrl}
          data-instgrm-version="14"
        >
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View this post on Instagram
          </a>
        </blockquote>
      </div>
    );
  }

  /*
   * ---------------------------------------------------------
   * FACEBOOK
   * ---------------------------------------------------------
   *
   * Facebook's official Page/Post plugin can be used
   * through the SDK.
   */

  if (
    platform === "FACEBOOK" &&
    facebookUrl
  ) {
    return (
      <div
        className={`social-embed social-embed-facebook ${
          featured
            ? "social-embed-featured"
            : "social-embed-card"
        }`}
      >
        <div
          className="fb-post"
          data-href={facebookUrl}
          data-width="500"
          data-show-text="true"
        />

        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="social-facebook-fallback"
        >
          View on Facebook ↗
        </a>
      </div>
    );
  }

  /*
   * ---------------------------------------------------------
   * FALLBACK
   * ---------------------------------------------------------
   */

  return (
    <div
      className={`social-embed social-embed-fallback ${
        featured
          ? "social-embed-featured"
          : "social-embed-card"
      }`}
    >
      <div className="social-fallback-inner">

        <span className="social-fallback-platform">
          {getPlatformName(platform)}
        </span>

        <span className="social-fallback-title">
          View SNGA
        </span>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-fallback-link"
        >
          Open Post ↗
        </a>

      </div>
    </div>
  );
};

export default SocialEmbed;