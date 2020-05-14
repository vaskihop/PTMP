package lt.vtmc.projectTaskManagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import lt.vtmc.projectTaskManagement.model.ProjectEntity;
import lt.vtmc.projectTaskManagement.model.Task;
import lt.vtmc.projectTaskManagement.model.TaskEntity;
import lt.vtmc.projectTaskManagement.repository.ProjectRepository;
import lt.vtmc.projectTaskManagement.repository.TaskRepository;

@Service
public class TaskServiceImpl implements TaskService {
	
	@Autowired
	private ProjectRepository projectRepo;
	
	@Autowired
	private TaskRepository taskRepo;

	@Override
	public List<TaskEntity> getTasks(Long projectId, Pageable pageable) {
		ProjectEntity projectFromDB=projectRepo.findById(projectId).orElse(null);
		return (List<TaskEntity>)taskRepo.findAllByProject(projectFromDB, pageable);
	}

	@Override
	public void addTask(Task task, Long projectId) {
		ProjectEntity projectFromDB=projectRepo.findById(projectId).orElse(null);
		TaskEntity newTask=new TaskEntity(task, projectFromDB);
		taskRepo.save(newTask);
		projectFromDB.getTaskList().add(newTask);
		projectRepo.save(projectFromDB);
	}

	@Override
	public void deleteTask(Long taskId) {
		TaskEntity taskFromDB=findTaskById(taskId);
		ProjectEntity projectFromDB=taskFromDB.getProject();
		taskFromDB.setProject(null);
		taskRepo.save(taskFromDB);
		projectFromDB.getTaskList().removeIf(task->task.getId().equals(taskId));
		projectRepo.save(projectFromDB);

	}

	@Override
	public TaskEntity findTaskById(Long taskId) {
		return taskRepo.findById(taskId).orElse(null);
	}

	@Override
	public void updateTask(Long taskId, Task task) {
		TaskEntity taskFromDB=findTaskById(taskId);
		taskFromDB.updateTask(task);
		taskRepo.save(taskFromDB);
	}

	@Override
	public List<TaskEntity> findTaskByIdOrTitle(String idOrTitle, Long projectId, Pageable pageable) {
		ProjectEntity projectFromDB=projectRepo.findById(projectId).orElse(null);
		Long id=0L;
		try {
			id=Long.parseLong(idOrTitle);
		} catch (NumberFormatException e) {
		}
		
		return taskRepo.findAllTaskEntityByProjectAndIdOrProjectAndTaskTitleContainsIgnoreCase(projectFromDB, id, projectFromDB, idOrTitle, pageable);
	}

}

