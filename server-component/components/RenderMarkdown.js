
import StyledMarkdown from "./RenderMarkdown.styled";




const RenderMarkdown = (props) => {

  return (
    <div key={props.name} className="w-full  border-double  border-4 border-light-blue-500  md:px-4 lg:px-6 py-5">
      <StyledMarkdown>{props.data}</StyledMarkdown>
    </div>
  );
};

export default RenderMarkdown;
