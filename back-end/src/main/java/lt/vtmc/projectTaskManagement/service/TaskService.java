package lt.vtmc.projectTaskManagement.service;

import java.util.List;

import org.springframework.data.domain.Pageable;

import lt.vtmc.projectTaskManagement.model.Task;
import lt.vtmc.projectTaskManagement.model.TaskEntity;

public interface TaskService {
	
	List<TaskEntity> getTasks(Long projectId, Pageable pageable);
	
	void addTask(Task task, Long projectId);
	
	void deleteTask(Long taskId);
	
	TaskEntity findTaskById(Long taskId);
	
	void updateTask(Long taskId, Task task);
	
	List<TaskEntity> findTaskByIdOrTitle(String idOrTitle, Long projectId, Pageable pageable);

}
