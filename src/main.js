

// let data = [
    
//         {
//           "country": "Afghanistan",
//           "timeline": {
//             "9/20/21": 3133227,
//             "9/21/21": 3133227,
//             "9/22/21": 3133227,
//             "9/23/21": 3133227,
//             "9/24/21": 3133227
//           }
//         },
//         {
//           "country": "Albania",
//           "timeline": {
//             "9/20/21": 1657595,
//             "9/21/21": 1665590,
//             "9/22/21": 1674093,
//             "9/23/21": 1674093,
//             "9/24/21": 1674093
//           }
//         },
//         {
//           "country": "Algeria",
//           "timeline": {
//             "9/20/21": 9989662,
//             "9/21/21": 9989662,
//             "9/22/21": 9989662,
//             "9/23/21": 9989662,
//             "9/24/21": 9989662
//           }
//         },
//         {
//           "country": "Andorra",
//           "timeline": {
//             "9/20/21": 93430,
//             "9/21/21": 93430,
//             "9/22/21": 93430,
//             "9/23/21": 93430,
//             "9/24/21": 93430
//           }
//         },
//         {
//           "country": "Angola",
//           "timeline": {
//             "9/20/21": 2820134,
//             "9/21/21": 2820134,
//             "9/22/21": 2820134,
//             "9/23/21": 2820134,
//             "9/24/21": 2820134
//           }
//         },
//         {
//           "country": "Anguilla",
//           "timeline": {
//             "9/20/21": 18565,
//             "9/21/21": 18565,
//             "9/22/21": 18565,
//             "9/23/21": 18565,
//             "9/24/21": 18565
//           }
//         },
//         {
//           "country": "Antigua and Barbuda",
//           "timeline": {
//             "9/20/21": 81915,
//             "9/21/21": 81915,
//             "9/22/21": 81915,
//             "9/23/21": 81915,
//             "9/24/21": 81915
//           }
//         }
//   ]

//   let new_data = data.map((item)=>{
// 	let p =[]
// 	let timeline = item?.timeline 
// 	if (!timeline){
// 		return null;
// 	}
// 	for (let k in timeline){
// 	p.push({
//         x:k,y:timeline[k]
//     })
// 	}
//     p.sort((current,next)=>{
//         let c = Date.parse(current.x)
//         let n = Date.parse(next.x)
//         return( n.valueOf() - c.valueOf())
//     })
// 	let d = {
// 	...item,
//         p
// 	}
// 	delete d.timeline;
    
// 	return d
    
// })
// console.log(JSON.stringify(new_data))
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Jim Green',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

class App extends React.Component {
  state = {
    searchText: '',
    searchedColumn: '',
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: '30%',
        ...this.getColumnSearchProps('name'),
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: '20%',
        ...this.getColumnSearchProps('age'),
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        ...this.getColumnSearchProps('address'),
        sorter: (a, b) => a.address.length - b.address.length,
        sortDirections: ['descend', 'ascend'],
      },
    ];
    return <Table columns={columns} dataSource={data} />;
  }
}

ReactDOM.render(<App />, mountNode);