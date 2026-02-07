import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Search, Filter } from 'lucide-react';
import { useState } from 'react';
import Badge from '../common/Badge';

const DataTable = ({ columns, data, actions }) => {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  return (
    <div className="bg-cyber-dark/50 backdrop-blur-sm border border-primary-500/20 rounded-xl overflow-hidden">
      {/* Table Header */}
      <div className="p-4 border-b border-primary-500/20 flex items-center justify-between">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-cyber-darker/50 border border-primary-500/20 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50"
          />
        </div>
        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-cyber-darker/50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  onClick={() => column.sortable && handleSort(column.key)}
                  className={`px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider ${
                    column.sortable ? 'cursor-pointer hover:text-primary-400' : ''
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {column.label}
                    {column.sortable && sortColumn === column.key && (
                      <span>
                        {sortDirection === 'asc' ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-primary-500/20">
            {data.map((row, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                className="hover:bg-primary-500/5 transition-colors"
              >
                {columns.map((column) => (
                  <td key={column.key} className="px-6 py-4 whitespace-nowrap">
                    {column.render ? column.render(row) : (
                      <span className="text-sm text-gray-300">{row[column.key]}</span>
                    )}
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 border-t border-primary-500/20 flex items-center justify-between">
        <p className="text-sm text-gray-400">
          Showing <span className="font-medium text-white">1</span> to{' '}
          <span className="font-medium text-white">{data.length}</span> of{' '}
          <span className="font-medium text-white">{data.length}</span> results
        </p>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 text-sm text-gray-400 hover:text-primary-400 border border-primary-500/20 rounded-lg hover:border-primary-500/50 transition-colors">
            Previous
          </button>
          <button className="px-3 py-1 text-sm bg-primary-500/20 text-primary-400 border border-primary-500/30 rounded-lg">
            1
          </button>
          <button className="px-3 py-1 text-sm text-gray-400 hover:text-primary-400 border border-primary-500/20 rounded-lg hover:border-primary-500/50 transition-colors">
            2
          </button>
          <button className="px-3 py-1 text-sm text-gray-400 hover:text-primary-400 border border-primary-500/20 rounded-lg hover:border-primary-500/50 transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
