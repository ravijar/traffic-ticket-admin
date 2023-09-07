import { useParams } from "react-router-dom";

const ReviewItem = () => {
  const params = useParams();
  const { violationId } = params;

  return <div>{violationId}</div>;
};

export default ReviewItem;
