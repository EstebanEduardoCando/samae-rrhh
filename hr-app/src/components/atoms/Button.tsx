interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button(props: ButtonProps) {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded" {...props} />
  );
}