export function ShowMoreBtn(props: {
  setShowProducts: (arg0: (prev: number) => number) => void;
}) {
  return (
    <div className="flex justify-center">
      <button
        className="ml-auto mr-auto mt-[60px] mb-[40px] border-2 py-[10px] px-[20px] rounded-[10px] text-white bg-black"
        onClick={() => {
          props.setShowProducts((prev: number) => prev + 12);
        }}
      >
        Show more
      </button>
    </div>
  );
}
