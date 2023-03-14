import { List } from './List';

const list = new List('A', 'C', 'N', 'C', 'N');

listUsage(list);

function listUsage(list: List) {
  showList(list);
  log('get index 3: ' + list.get(3), '\n');
  log('Append "E": \n');
  list.append('E');
  showList(list);
  log('insert G index 3: \n');
  list.insert('G', 3);
  showList(list);
  log('delete index 3 \n');
  list.delete(3);
  showList(list);
  log('deleteAll character "C" \n');
  list.deleteAll('C');
  showList(list);
  log('reverse list \n');
  list.reverse();
  showList(list);
  log('findFirst "N": ' + list.findFirst('N') + '\n');
  log('findLast "N": ' + list.findLast('N') + '\n');
  const clone = list.clone();
  log('clone \n');
  showList(clone);
  log('clone deleteALL "N"\n');
  clone.deleteAll('N');
  showList(clone);
  log('extend list using clone: \n');
  list.extend(clone);
  showList(list);
  log('length: ' + list.length(), '\n');
  log('clear list: \n');
  list.clear();
  showList(list);
}

function showList(list: List) {
  if (list.length() === 0) log('[]');
  for (let i = 0; i < list.length(); i++) {
    log('%d: %s', i, list.get(i));
  }
  log('');
}

function log(...args: any) {
  console.log(...args);
}
