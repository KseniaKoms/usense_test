import { Title } from "./Heading.styled";

interface ITitle {
  title: string;
}

export const Heading = ({ title }: ITitle) => {
  return <Title>{title}</Title>;
};
