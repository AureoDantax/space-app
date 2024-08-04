import styled from "styled-components";
import tags from "./tags.json";

const TagTitle = styled.h3`
  color: #d9d9d9;
  font-size: 24px;
  margin: 0;
`;

const TagsContainer = styled.div`
  display: flex;
  margin-top: 48px;
  width: 100%;
  height: 49px;
  align-items: center;
  gap: 20px;
`;
const TagsContent = styled.div`
  display: flex;
  width: Hug(522px) px;
  gap: 24px;
`;

const Tag = styled.button`
  font-size: 24px;

  color: #ffffff;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover {
    border-color: #c98cf1;
  }
`;

const Tags = () => {
  return (
    <>
      <TagsContainer>
        <TagTitle>Busque por tags:</TagTitle>
        <TagsContent>
          {tags.map((tag) => (
            <Tag key={tag.id} $active={true}>
              {tag.title}
            </Tag>
          ))}
        </TagsContent>
      </TagsContainer>
    </>
  );
};
export default Tags;
