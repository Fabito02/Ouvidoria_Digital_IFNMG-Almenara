import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
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
    <Form onSubmit={handleSearchSubmit} className="d-flex" style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
    <Icon 
    icon="material-symbols:search"
    style={{
        fontSize: '22px',
        transform: 'translateX(30px)',
        color: '#00000066',
    }}
    />
      <Form.Control
        type="search"
        placeholder="Pesquisar..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="me-2"
        style={{ 
            borderRadius: '12px',
            width: '320px',
            height: '35px',
            paddingLeft: '40px',
            paddingRight: '40px',
            backgroundColor: '#E7ECE6',
            border: 'none',
            fontSize: '14px',
        }}
      />
    <Icon 
    icon="material-symbols:mic"
    style={{
        fontSize: '22px',
        transform: 'translateX(-40px)',
        color: '#00000066',
        cursor: 'pointer',
    }}
    />
    </Form>
  );
}

export default SearchBar;
