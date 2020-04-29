package lt.vtmc.projectTaskManagement.service;

import java.util.List;

import lt.vtmc.projectTaskManagement.model.ProjectEntity;
import lt.vtmc.projectTaskManagement.model.Task;
import lt.vtmc.projectTaskManagement.model.TaskEntity;

public interface TaskService {
	
	List<TaskEntity> getTasks(Long projectId);
	
	void addTask(Task task, Long projectId);
	
	void deleteTask(Long taskId);
	
	TaskEntity findTaskById(Long taskId);
	
	void updateTask(Long taskId, Task task);
	
	List<TaskEntity> findTaskByIdOrTitle(String idOrTitle);
	

}
