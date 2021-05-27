import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <div>
      <ChildAsFC color={'red'} onClick={() => console.log('click')}>
        asdasddsa
      </ChildAsFC>
    </div>
  );
};

export default Parent;
