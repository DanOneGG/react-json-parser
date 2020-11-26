import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
import { useDispatch } from 'react-redux';

import { JsonObjectType } from '@components/Table/utils/types';
import { useStyles } from '@components/TableCellEditable/styles';
import { modifyData } from '@controllers/dataTable/actions';


export const DeleteButton: React.FC<{isEditable: boolean, data: JsonObjectType, rowID: number, rowKey: string}> = ({
  isEditable,
  data,
  rowID,
  rowKey
}) => {

  const dispatch = useDispatch();
  const classes = useStyles();

  const deleteValue = () => {
    data[rowID][rowKey] = null;
    dispatch(modifyData(data));
  };

  return (
    <IconButton onClick={deleteValue} aria-label="delete" className={classes.button} disabled={isEditable} >
      <DeleteIcon fontSize="small" />
    </IconButton>
  );
};


