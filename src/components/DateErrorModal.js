import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		outline: 'none'
	},
	paper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#457b9d',
		border: '2px solid gray',
		color: 'white',
		borderRadius: '10px',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3)
	},
	button: {
		margin: '8px auto',
		padding: '8px',
		width: '40%',
		backgroundColor: '#f08080',
		border: '2px solid gray',
		color: 'white',
		borderRadius: '10px',
		cursor: 'pointer'
	}
}));

export default function DateErrorModal({ handleClose, open }) {
	const classes = useStyles();
	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500
				}}
			>
				<Fade in={open}>
					<div className={classes.paper}>
						<p id="transition-modal-description">
							Por favor seleccioná una fecha de check-in igual o
							posterior al día de hoy
						</p>
						<button
							className={classes.button}
							onClick={handleClose}
						>
							Volver a filtrar
						</button>
					</div>
				</Fade>
			</Modal>
		</div>
	);
}
