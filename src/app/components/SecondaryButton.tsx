import { FC } from "react";

interface SecondaryButtonProps {
    text: string;
}

const SecondaryButton: FC<SecondaryButtonProps> = ({ text }) => {
    return (
        <button
            type="button"
            className="bg-green-900 active:scale-[0.97] hover:text-black transition"
        >
            {text}
        </button>
    );
};

export default SecondaryButton;
