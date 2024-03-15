import React, {
  FC,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
interface FieldProps {
  label: string;
  children: ReactNode;
  htmlFor: string;
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
}

const Field: FC<FieldProps> = ({ label, children, htmlFor, error }) => {
  const id = htmlFor || getChildId(children);
  return (
    <div>
      {label && (
        <label
          className="input input-bordered flex items-center gap-2"
          htmlFor={id}
        >
          {label}
          {children}
        </label>
      )}

      {/* {!!error && <ErrorMessage role="alert">{error.message}</ErrorMessage>} */}
    </div>
  );
};

const getChildId = (
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined
) => {
  const child = React.Children.only(children);

  if ("id" in child?.props) {
    return child.props.id;
  }
};

export default Field;
