import React, { useEffect, useRef, useState } from "react";
import { Stage, Layer, Rect, Text, Image as KonvaImage, Transformer } from "react-konva";
import useImage from "use-image";

const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 500;

const TShirtEditor = () => {
  const [side, setSide] = useState("front");
  const stageRef = useRef();
  const [uploadedImageObj, setUploadedImageObj] = useState(null);
  const uploadedImageRef = useRef(null);
  const transformerRef = useRef(null);
  const [isImageSelected, setIsImageSelected] = useState(false);

  useEffect(() => {
    if (isImageSelected && transformerRef.current && uploadedImageRef.current) {
      transformerRef.current.nodes([uploadedImageRef.current]);
      transformerRef.current.getLayer().batchDraw();
    }
  }, [isImageSelected]);

  // Load t-shirt image
  const [shirtImage] = useImage(
    side === "front"
      ? "/images/tshirt-front.png"
      : "/images/tshirt-back.png"
  );

  const [textProps, setTextProps] = useState({
    x: 100,
    y: 150,
    text: "Type here / এখানে লিখুন",
    fontSize: 24,
    fill: "#222",
    fontStyle: "normal",
    fontFamily: "Hind Siliguri",
    align: "center",
    draggable: true
  });

  return (
    <div className="flex flex-col items-center py-10 px-4">
      <h1 className="text-2xl font-bold mb-4">Customize Your T-Shirt</h1>

      {/* Side switch */}
      <div className="flex gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${
            side === "front" ? "bg-[#203466] text-white" : "bg-gray-200"
          }`}
          onClick={() => setSide("front")}
        >
          Front Side
        </button>
        <button
          className={`px-4 py-2 rounded ${
            side === "back" ? "bg-[#203466] text-white" : "bg-gray-200"
          }`}
          onClick={() => setSide("back")}
        >
          Back Side
        </button>
      </div>

      {/* Text editor */}
      <div className="w-full max-w-md mb-6 flex flex-col gap-2">
        <textarea
          rows={3}
          placeholder="Type in English or Bengali..."
          className="border px-3 py-2 rounded"
          value={textProps.text}
          onChange={(e) =>
            setTextProps({ ...textProps, text: e.target.value })
          }
        />
        <div className="flex gap-2 flex-wrap">
          <select
            value={textProps.fontFamily}
            className="border px-2 py-1 rounded"
            onChange={(e) =>
              setTextProps({ ...textProps, fontFamily: e.target.value })
            }
          >
            <option value="Arial">Arial</option>
            <option value="Dancing Script">Dancing Script</option>
            <option value="Pacifico">Pacifico</option>
            <option value="Hind Siliguri">Hind Siliguri</option>
            <option value="Noto Sans Bengali">Noto Sans Bengali</option>
          </select>

          <select
            value={textProps.fontStyle}
            className="border px-2 py-1 rounded"
            onChange={(e) =>
              setTextProps({ ...textProps, fontStyle: e.target.value })
            }
          >
            <option value="normal">Normal</option>
            <option value="bold">Bold</option>
            <option value="italic">Italic</option>
            <option value="bold italic">Bold Italic</option>
          </select>

          <select
            value={textProps.align}
            className="border px-2 py-1 rounded"
            onChange={(e) =>
              setTextProps({ ...textProps, align: e.target.value })
            }
          >
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>

          <input
            type="number"
            value={textProps.fontSize}
            min={12}
            max={100}
            className="border px-2 py-1 w-20 rounded"
            onChange={(e) =>
              setTextProps({
                ...textProps,
                fontSize: parseInt(e.target.value)
              })
            }
          />

<label className="flex items-center gap-2">
  <span>Text Color:</span>
  <input
    type="color"
    value={textProps.fill}
    onChange={(e) =>
      setTextProps({ ...textProps, fill: e.target.value })
    }
    className="w-10 h-10 p-0 border rounded"
  />
</label>

        </div>
      </div>

      <div>
      <input
  type="file"
  accept="image/*"
  onChange={(e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const img = new window.Image();
      img.src = reader.result;
      img.onload = () => {
        setUploadedImageObj({
          image: img,
          x: 100,
          y: 200,
          width: 150,
          height: 150,
        });
      };
    };
    reader.readAsDataURL(file);
  }}
  className="my-4"
/>

{uploadedImageObj && (
  <div className="flex items-center gap-4 mb-4">
    <label className="flex gap-2 items-center">
      Width:
      <input
        type="number"
        value={uploadedImageObj.width}
        onChange={(e) =>
          setUploadedImageObj({
            ...uploadedImageObj,
            width: parseInt(e.target.value),
          })
        }
        className="border px-2 py-1 w-20 rounded"
      />
    </label>

    <label className="flex gap-2 items-center">
      Height:
      <input
        type="number"
        value={uploadedImageObj.height}
        onChange={(e) =>
          setUploadedImageObj({
            ...uploadedImageObj,
            height: parseInt(e.target.value),
          })
        }
        className="border px-2 py-1 w-20 rounded"
      />
    </label>

    <button
      onClick={() => setUploadedImageObj(null)}
      className="px-4 py-2 bg-red-500 text-white rounded"
    >
      Remove Image
    </button>
  </div>
)}


      </div>

      {/* Stage */}
      <Stage
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        ref={stageRef}
        className="bg-white rounded shadow"
      >
        <Layer>
          {shirtImage && (
            <KonvaImage
              image={shirtImage}
              x={0}
              y={0}
              width={CANVAS_WIDTH}
              height={CANVAS_HEIGHT}
            />
          )}

          {/* Print area */}
          <Rect
            x={75}
            y={120}
            width={250}
            height={300}
            stroke="#999"
            dash={[4, 4]}
          />

          {/* Text inside print area */}
          <Text
            {...textProps}
            x={75}
            y={textProps.y}
            width={250}
            wrap="word"
            align={textProps.align}
            onDragEnd={(e) =>
              setTextProps({
                ...textProps,
                x: e.target.x(),
                y: e.target.y()
              })
            }
          />

{uploadedImageObj && (
  <>
    <KonvaImage
      image={uploadedImageObj.image}
      x={uploadedImageObj.x}
      y={uploadedImageObj.y}
      width={uploadedImageObj.width}
      height={uploadedImageObj.height}
      draggable
      ref={uploadedImageRef}
      onClick={() => setIsImageSelected(true)}
      onTap={() => setIsImageSelected(true)} // for mobile
      onDragEnd={(e) =>
        setUploadedImageObj({
          ...uploadedImageObj,
          x: e.target.x(),
          y: e.target.y(),
        })
      }
      onTransformEnd={(e) => {
        const node = uploadedImageRef.current;
        const scaleX = node.scaleX();
        const scaleY = node.scaleY();

        // Reset scale to avoid compounding
        node.scaleX(1);
        node.scaleY(1);

        setUploadedImageObj({
          ...uploadedImageObj,
          x: node.x(),
          y: node.y(),
          width: Math.max(5, node.width() * scaleX),
          height: Math.max(5, node.height() * scaleY),
        });
      }}
    />
    {isImageSelected && (
      <Transformer
        ref={transformerRef}
        boundBoxFunc={(oldBox, newBox) => {
          // Limit minimum size
          if (newBox.width < 5 || newBox.height < 5) {
            return oldBox;
          }
          return newBox;
        }}
        rotateEnabled={false}
      />
    )}
  </>
)}




        </Layer>
      </Stage>
    </div>
  );
};

export default TShirtEditor;
