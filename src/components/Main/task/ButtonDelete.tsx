import ImageDelete from "@/assets/ImageDelete";

type ButtonDeleteTaskProps = {
  onClick: () => void;
};

export const ButtonDelete = ({ onClick }: ButtonDeleteTaskProps) => {
  return (
    <button
      className="w-6 justify-self-end text-[var(--color-second)] hover:text-[var(--color-primary)]"
      onClick={onClick}
    >
      <ImageDelete width={24} height={24} />
    </button>
  );
};
