type ButtonAddProps = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ButtonAdd = ({ setModal }: ButtonAddProps) => {
  return (
    <button
      onClick={() => setModal(true)}
      className="mt-7 px-4 py-1.5 w-1/4 border-none rounded-full bg-yellow-200 text-white text-sm"
    >
      Add
    </button>
  );
};
