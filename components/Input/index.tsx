export default function Input({
  placeholder,
  onChange,
}: {
  placeholder: string;
  onChange: any;
}) {
  return (
    <input
      className="h-12 w-full  px-4  outline-none"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
