import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const TodoList = ({ todolist, addTodo }) => (
  <Fragment>
    <ul>
      {todolist.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
    <button type="button" onClick={() => addTodo('Nova Tarefa')}>
      Adicionar
    </button>
  </Fragment>
);

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

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch({ type: 'ADD_TODO', payload: { text } }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
