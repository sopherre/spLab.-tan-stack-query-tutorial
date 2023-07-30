import { Link } from "react-router-dom";

export const TopPage: React.FC = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/conventional"}>従来のフェッチ</Link>
        </li>
        <li>
          <Link to={"/tan-stack-query"}>TanStack Queryのフェッチ</Link>
        </li>
        <li>
          <Link to={"/error-boundary"}>ErrorBoundary</Link>
        </li>
        <li>
          <Link to={"/mutation"}>Mutation</Link>
        </li>
      </ul>
    </div>
  );
};
