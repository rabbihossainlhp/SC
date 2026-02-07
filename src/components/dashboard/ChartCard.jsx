import { motion } from 'framer-motion';
import Card from '../common/Card';

const ChartCard = ({ title, subtitle, icon: Icon, children, actions }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <Card className="bg-cyber-dark/50 backdrop-blur-sm border border-primary-500/20">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            {Icon && (
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center shadow-neon-green">
                <Icon className="w-5 h-5 text-white" />
              </div>
            )}
            <div>
              <h3 className="text-lg font-bold text-white">{title}</h3>
              {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
            </div>
          </div>
          {actions && <div className="flex items-center gap-2">{actions}</div>}
        </div>
        <div>{children}</div>
      </Card>
    </motion.div>
  );
};

export default ChartCard;
