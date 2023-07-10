import React from "react";

type ConditionalClientRenderProps = {
  children: React.ReactNode;
};

const ConditionalClientRender: React.FC<ConditionalClientRenderProps> = ({
  children,
}) => {
  const [shouldRender, setShouldRender] = React.useState(false);

  React.useEffect(() => {
    setShouldRender(true);
  }, []);

  return shouldRender ? <>{children}</> : null;
};

export default ConditionalClientRender;