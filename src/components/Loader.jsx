import React from "react";
import { useLoading } from "../global/LoadingContext";

const Loader = () => {
  const { loading } = useLoading();  // Get loading state from context

  if (!loading) return null;  // Don't render the loader if loading is false

  return (
        <div style={{height: '100vh', background: '#ffffff0f', backdropFilter: 'blur(6px)',
            position:'absolute', zIndex:'1000',top:'0',left:'0',width:'100%', display:'flex', justifyContent:'center',alignItems:'center' }}>
              <div className="w-10">
                {/* <img alt="loader" className="w-full" src="/logo.png" loading="lazy" /> */}
              </div>
          </div>
  );
};

export default Loader;
