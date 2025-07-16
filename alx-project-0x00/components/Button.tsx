import { ButtonProps } from "@/interfaces"

const Button: React.FC<ButtonProps> = ({ name }) => {
    return (
        <button className="mt-5 border px-3 py-2 border-y-black bg-white text-shadow-black rounded-3xl hover:border-green-200 ">{name}</button>
    )
}
export default Button