import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const TodoList = (props) => {
  const { todolist } = props;
  return (
    <ul>
      {todolist.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todolist: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  todolist: state.todolist,
});

export default connect(mapStateToProps)(TodoList);
