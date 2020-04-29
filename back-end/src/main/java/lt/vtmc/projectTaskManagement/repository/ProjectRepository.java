package lt.vtmc.projectTaskManagement.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import lt.vtmc.projectTaskManagement.model.ProjectEntity;

public interface ProjectRepository extends CrudRepository<ProjectEntity, Long> {

	List<ProjectEntity> findProjectEntityByProjectTitleContainsIgnoreCase(String title);
}
