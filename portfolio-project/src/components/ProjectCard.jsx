
const ProjectCard = ({ title, imageSrc, altText, description, techStack, link, linkLabel }) => {
  return (
    <div className="w-full">
      <div className="flex px-5 font-semibold text-lg pb-5">
        <p>{title}</p>
      </div>

      <div className="flex flex-col lg:flex-row w-full pb-6">
        <div className="flex justify-center items-start font-medium text-md w-full lg:w-1/2 lg:pt-10 px-6">
          <img
            className="w-80 h-80 object-cover border-pink-200 border-2 rounded-2xl"
            src={imageSrc}
            alt={altText}
          />
        </div>
        <div className="flex-1 flex flex-col justify-center px-10 text-md pb-10 pt-2">
          <p>
            <br />
            {description}
            <br />
            <br />
            {techStack}
            <br />
            <a href={link} target="_blank" rel="noopener noreferrer">
              {linkLabel}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;