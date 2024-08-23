export function Button({text,className,onClick,disabled=false}: 
    {text: string,className?:string,onClick?:()=>void,disabled?:boolean}) {
  return (
    <button className={`glow-on-hover ${className ? className : ""}`}
    onClick={onClick}
    disabled={disabled}
    >
      {text}
    </button>
  );
}