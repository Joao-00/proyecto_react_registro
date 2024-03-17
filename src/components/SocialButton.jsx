
const SocialButton = ({ icon }) => {
  return (
    <button className="icon-container border border-black rounded-circle py-2 px-3">
      <i className={icon} />
    </button>
  );
};

export default SocialButton;
