import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as TodosActions from '../../store/actions/todolist';

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
  addTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  todolist: state.todolist,
});

const mapDispatchToProps = dispatch => bindActionCreators(TodosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
