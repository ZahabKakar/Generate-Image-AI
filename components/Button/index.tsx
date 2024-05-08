export default function Button({
  title,
  handleClick,
}: {
  title: string;
  handleClick: any;
}) {
  return (
    <button
      className="w-24  h-12  mr-2  bg-black text-white rounded-full text-sm  "
      onClick={handleClick}
    >
      {title}
    </button>
  );
}
