package lt.vtmc.projectTaskManagement.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import lt.vtmc.projectTaskManagement.model.ProjectEntity;
import lt.vtmc.projectTaskManagement.model.TaskEntity;

public interface TaskRepository extends CrudRepository<TaskEntity, Long> {
	List<TaskEntity> findAllTaskEntityByProjectAndIdOrProjectAndTaskTitleContainsIgnoreCase(ProjectEntity project, Long id, ProjectEntity project1, String title);
	
}
