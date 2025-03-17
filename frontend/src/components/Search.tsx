import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Icon } from '@iconify-icon/react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Pesquisando por:', searchQuery);
  };

  return (
    <Form 
      onSubmit={handleSearchSubmit} 
      className="d-flex align-items-center position-relative"
      style={{ width: '100%', maxWidth: '400px' }}
    >
      <Icon 
        icon="material-symbols:search"
        className="position-absolute"
        style={{
          fontSize: '22px',
          left: '10px',
          color: '#00000066',
        }}
      />
      
      <Form.Control
        type="search"
        placeholder="Pesquisar..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="flex-grow-1"
        style={{
          borderRadius: '14px',
          paddingLeft: '38px',
          paddingRight: '38px',
          backgroundColor: '#E7ECE6',
          border: 'none',
          fontSize: '15px',
          minWidth: '140px',
          height: '38px',
        }}
      />
      <Icon 
        icon="material-symbols:mic"
        className="position-absolute"
        style={{
          fontSize: '22px',
          right: '10px',
          color: '#00000066',
          cursor: 'pointer',
        }}
      />
    </Form>
  );
}

export default SearchBar;
