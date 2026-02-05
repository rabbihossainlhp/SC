import { useState } from 'react';
import { ChevronDown, ChevronRight, PlayCircle, CheckCircle, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LessonSidebar = ({ 
  lessons = [], 
  currentLessonId, 
  onLessonSelect, 
  completedLessons = [],
  isEnrolled = false 
}) => {
  const [expandedSections, setExpandedSections] = useState([]);

  // Group lessons by section
  const groupedLessons = lessons.reduce((acc, lesson) => {
    const section = lesson.section || 'General';
    if (!acc[section]) {
      acc[section] = [];
    }
    acc[section].push(lesson);
    return acc;
  }, {});

  const toggleSection = (section) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const isLessonAccessible = (lesson) => {
    return isEnrolled || lesson.isPreview;
  };

  const isLessonCompleted = (lessonId) => {
    return completedLessons.includes(lessonId);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-soft border border-gray-200 dark:border-gray-700">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
          Course Content
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          {lessons.length} lessons
        </p>
      </div>

      <div className="custom-scrollbar max-h-[600px] overflow-y-auto">
        {Object.entries(groupedLessons).map(([section, sectionLessons]) => {
          const isExpanded = expandedSections.includes(section);
          
          return (
            <div key={section} className="border-b border-gray-200 dark:border-gray-700 last:border-0">
              {/* Section Header */}
              <button
                onClick={() => toggleSection(section)}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <span className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                  {section}
                </span>
                <span className="text-sm text-gray-500">
                  {sectionLessons.length} lessons
                </span>
              </button>

              {/* Lessons List */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    {sectionLessons.map((lesson) => {
                      const isAccessible = isLessonAccessible(lesson);
                      const isCompleted = isLessonCompleted(lesson.id);
                      const isCurrent = lesson.id === currentLessonId;

                      return (
                        <button
                          key={lesson.id}
                          onClick={() => isAccessible && onLessonSelect(lesson)}
                          disabled={!isAccessible}
                          className={`
                            w-full px-4 py-3 pl-12 flex items-start gap-3 text-left
                            transition-colors relative
                            ${isCurrent 
                              ? 'bg-primary-50 dark:bg-primary-900/20 border-l-4 border-primary-600' 
                              : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'
                            }
                            ${!isAccessible && 'cursor-not-allowed opacity-60'}
                          `}
                        >
                          {/* Icon */}
                          <div className="flex-shrink-0 mt-0.5">
                            {!isAccessible ? (
                              <Lock className="w-5 h-5 text-gray-400" />
                            ) : isCompleted ? (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            ) : (
                              <PlayCircle className="w-5 h-5 text-primary-600" />
                            )}
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <h4 className={`
                              text-sm font-medium mb-1 line-clamp-2
                              ${isCurrent 
                                ? 'text-primary-600 dark:text-primary-400' 
                                : 'text-gray-900 dark:text-white'
                              }
                            `}>
                              {lesson.title}
                            </h4>
                            <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400">
                              <span>{lesson.duration}</span>
                              {lesson.isPreview && (
                                <span className="text-primary-600 dark:text-primary-400 font-medium">
                                  Preview
                                </span>
                              )}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LessonSidebar;
