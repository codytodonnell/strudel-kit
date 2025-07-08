import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import { AppLink } from '../../../components/AppLink';

interface Props {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * Modal to display over the process list to fill out a form for creating
 * a new process design project.
 */
export const NewProcessModal: React.FC<Props> = ({
  modalOpen,
  setModalOpen,
}) => {
  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <Modal
      open={modalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack
        direction="column"
        sx={{
          position: 'absolute' as 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 550,
          bgcolor: 'background.paper',
          border: '1px solid #ccc',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          New Process Design Project
        </Typography>
        
        <FormControl fullWidth>
          <InputLabel id="process-type-select-label">Process Type</InputLabel>
          <Select
            labelId="process-type-select-label"
            id="process-type-select"
            label="Process Type"
          >
            <MenuItem value="extraction">Metal Extraction</MenuItem>
            <MenuItem value="separation">Separation Process</MenuItem>
            <MenuItem value="synthesis">Chemical Synthesis</MenuItem>
            <MenuItem value="recycling">Recycling Process</MenuItem>
          </Select>
        </FormControl>
        
        <FormControl fullWidth>
          <InputLabel id="feedstock-select-label">Feedstock</InputLabel>
          <Select labelId="feedstock-select-label" id="feedstock-select" label="Feedstock">
            <MenuItem value="hard-drives">End-of-life Hard Disk Drives</MenuItem>
            <MenuItem value="e-waste">Electronic Waste</MenuItem>
            <MenuItem value="batteries">Lithium-ion Batteries</MenuItem>
            <MenuItem value="magnets">Permanent Magnets</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>
        
        <TextField 
          id="name-field" 
          label="Process Name" 
          variant="outlined"
          placeholder="e.g., REE Extraction from HDDs"
        />
        
        <TextField
          id="target-products-field"
          label="Target Products"
          variant="outlined"
          placeholder="e.g., Neodymium, Dysprosium, Terbium"
        />
        
        <TextField
          id="description-field"
          label="Description"
          multiline
          rows={4}
          placeholder="Describe the process objectives and key considerations..."
        />
        
        <Box textAlign="right">
          <AppLink to="/process-design/$id/diagram" params={{ id: 'new' }}>
            <Button variant="contained" data-testid="pd-create-button">
              Create Process
            </Button>
          </AppLink>
        </Box>
      </Stack>
    </Modal>
  );
};