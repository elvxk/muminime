import Link from "next/link";
import { GiMummyHead } from "react-icons/gi";
const Modal = ({ message }: { message: string }) => {
  return (
    <dialog id="modal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <Link
          href="/"
          className="flex group items-center gap-2 text-primary font-bold text-xl"
        >
          <GiMummyHead className="group-hover:rotate-[25deg] transition-all" />
          <span className="group-hover:scale-105 transition-all">
            MUMI
            <span className="text-accent-content">NIME</span>
          </span>
        </Link>

        <p className="py-4 text-primary">{message}</p>
        <form method="dialog" className="modal-backdrop">
          <button className="btn btn-primary btn-outline">Close</button>
        </form>
      </div>
    </dialog>
  );
};
export default Modal;
