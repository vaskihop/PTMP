package lt.vtmc.projectTaskManagement.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lt.vtmc.projectTaskManagement.enums.Priority;
import lt.vtmc.projectTaskManagement.enums.State;
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
	public List<TaskEntity> getTasks(Long projectId) {
		List<TaskEntity> taskList=new ArrayList<TaskEntity>();
		taskRepo.findAll().forEach(taskList::add);
		return taskList.stream().filter(task->task.getProject().getId().equals(projectId)).collect(Collectors.toList());
	}

	@Override
	public void addTask(Task task, Long projectId) {
		ProjectEntity projectFromDB=projectRepo.findById(projectId).orElse(null);
		TaskEntity newTask=new TaskEntity(task.getTaskTitle(), task.getTaskDescription(), Priority.valueOf(task.getTaskPriority()), State.valueOf(task.getTaskState()), projectFromDB);
		taskRepo.save(newTask);
		projectFromDB.getTaskList().add(newTask);
		projectFromDB.setGeneralTaskNumber();
		projectFromDB.setUnfinishedTaskNumber();
		projectFromDB.setProjectState();
		projectRepo.save(projectFromDB);
	}

	@Override
	public void deleteTask(Long taskId) {
		TaskEntity taskFromDB=findTaskById(taskId);
		ProjectEntity projectFromDB=taskFromDB.getProject();
		taskFromDB.setProject(null);
		taskRepo.save(taskFromDB);
		projectFromDB.getTaskList().removeIf(task->task.getId().equals(taskId));
		projectFromDB.setGeneralTaskNumber();
		projectFromDB.setUnfinishedTaskNumber();
		projectFromDB.setProjectState();
		projectRepo.save(projectFromDB);

	}

	@Override
	public TaskEntity findTaskById(Long taskId) {
		return taskRepo.findById(taskId).orElse(null);
	}

	@Override
	public void updateTask(Long taskId, Task task) {
		TaskEntity taskFromDB=findTaskById(taskId);
		taskFromDB.setTaskDescription(task.getTaskDescription());
		taskFromDB.setTaskPriority(Priority.valueOf(task.getTaskPriority()));
		taskFromDB.setTaskState(State.valueOf(task.getTaskState()));
		taskFromDB.setTaskTitle(task.getTaskTitle());
		ProjectEntity projectFromDB=taskFromDB.getProject();
		taskRepo.save(taskFromDB);
		projectFromDB.setGeneralTaskNumber();
		projectFromDB.setUnfinishedTaskNumber();
		projectFromDB.setProjectState();
		projectRepo.save(projectFromDB);

	}

}

