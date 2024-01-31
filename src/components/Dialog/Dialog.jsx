const Dialog = ({ message }) => {
  return (
    <dialog id="modal" open>
      <h2>{message}</h2>
      <button onClick={() => window.modal.close()}></button>
    </dialog>
  );
};

export default Dialog;
