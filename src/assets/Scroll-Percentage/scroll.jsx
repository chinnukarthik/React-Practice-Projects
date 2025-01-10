import React, { useEffect, useState } from "react";

function ScrollPercentageBar({ url }) {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [erroMsg, setErrorMsg] = useState(null);
  const [PercentageScroll, setPercentageScorll] = useState(0);

  async function fetchContent(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      if (data && data.products && data.products.length > 0) {
        setContent(data.products);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchContent(url);
  }, [url]);

  function handleScrollPercentage() {
    const scrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setPercentageScorll((scrolled / height) * 100);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if (loading) {
    return <div>Loading Please wait....</div>;
  }
  if (erroMsg) {
    return <div>Error occurred:{erroMsg}</div>;
  }
  return (
    <div className="flex items-center flex-col ">
      <div className="fixed bg-green-400 w-lvw h-[40px] flex flex-col">
        <h1 className="self-center mt-1 text-2xl">Custom Scroll</h1>
        <div className="w-lvw h-2.5 bg-white">
          <div
            style={{ width: `${PercentageScroll}%` }}
            className={`h-1.5 bg-pink-400`}
          ></div>
        </div>
      </div>
      <div className="flex items-center flex-col mt-12 gap-1">
        {content && content.length > 0
          ? content.map((item) => <p>{item.title}</p>)
          : null}
      </div>
    </div>
  );
}

export default ScrollPercentageBar;
